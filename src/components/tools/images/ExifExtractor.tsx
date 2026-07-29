import React, { useState, useRef, useEffect } from 'react';
import exifr from 'exifr';
import { useTranslations } from '../../../i18n/utils';
import type { Language } from "../../../data/tools";
import { useToast } from '../../Toast';
import LoadingSpinner from '../common/LoadingSpinner';

const EXIF_DISPLAY_KEYS = new Set([
  'Make', 'Model', 'Software', 'DateTimeOriginal',
  'ExposureTime', 'FNumber', 'ISO', 'FocalLength',
  'latitude', 'longitude', 'Orientation', 'XResolution',
  'YResolution', 'ImageDescription', 'Artist', 'Copyright',
  'GPSLatitude', 'GPSLongitude', 'GPSAltitude', '_note'
]);

const ExifExtractor: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [exifData, setExifData] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setExifData(null);
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    setImageUrl(URL.createObjectURL(file));

    // EXIF tags that indicate the file actually has EXIF data vs a generic answer
    const hasExifTags = (data: Record<string, unknown> | null): boolean => {
      if (!data) return false;
      // exifr returns at minimum basic TIFF tags if any EXIF exists
      const exifIndicators = ['Make', 'Model', 'Software', 'DateTimeOriginal',
        'ExposureTime', 'FNumber', 'ISO', 'FocalLength', 'GPSLatitude',
        'latitude', 'longitude', 'Orientation', 'XResolution', 'YResolution',
        'ImageDescription', 'Artist', 'Copyright'];
      return exifIndicators.some(k => data[k] != null);
    };

    try {
      // Approach 1: read as ArrayBuffer (more reliable for exifr)
      const arrayBuffer = await file.arrayBuffer();

      // exifr can parse ArrayBuffer, File, Blob, or string path
      // Pass options that ask for everything we can get
      const output = await exifr.parse(arrayBuffer, {
        gps: true,
        reviveValues: true,
        tiff: true,
        xmp: true,
        icc: true,
        iptc: true,
        jfif: true,
        ihdr: true,
        interop: true,
        mng: false,
        ifd0: true,
        ifd1: true,
        exif: true,
        translateKeys: true,
        translateValues: true,
      });

      if (output && hasExifTags(output as Record<string, unknown>)) {
        setExifData(output as Record<string, unknown>);
      } else {
        // Approach 2: try with the File object directly (some versions handle this better)
        const output2 = await exifr.parse(file, {
          gps: true,
          reviveValues: true,
          tiff: true,
          xmp: true,
          pick: ['all'],  // try to get all tags
        }).catch(() => null);

        if (output2 && hasExifTags(output2 as Record<string, unknown>)) {
          setExifData(output2 as Record<string, unknown>);
        } else {
          // Approach 3: only parse ifd0, skip exif IFD (rare edge case where exif marker is corrupted)
          const output3 = await exifr.parse(arrayBuffer, {
            ifd0: true,
            ifd1: false,
            exif: false,
            gps: false,
          }).catch(() => null);

          if (output3 && Object.keys(output3).length > 0) {
            setExifData({ ...(output3 as Record<string, unknown>), _note: 'Partial read (EXIF block may be corrupted)' });
          } else {
            showToast(t('components.exifExtractor.noExif'), 'info');
          }
        }
      }
    } catch {
      showToast(t('components.exifExtractor.errorParsing'), 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const InfoItem = ({ label, value }: { label: string; value: string | number | boolean | null | undefined }) => (
    value != null ? (
      <div className="flex flex-col border-b border-gray-100 py-2 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">{label}</span>
        <span className="text-sm text-gray-800 dark:text-gray-200 break-all">{String(value)}</span>
      </div>
    ) : null
  );

  // Compute extra tags (those not in our display UI) for the "raw tags" section
  const extraTags = exifData
    ? Object.entries(exifData).filter(([key]) => !EXIF_DISPLAY_KEYS.has(key))
    : [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={t('components.exifExtractor.readingMetadata')} />}
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            ref={fileInputRef}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-purple-500 transition-colors group dark:border-gray-600"
          >
            {imageUrl ? (
              <img src={imageUrl} alt={t('components.exifExtractor.altPreview')} className="w-full h-full object-contain p-2" />
            ) : (
              <div className="text-center p-4">
                <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform">📷</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t('components.exifExtractor.selectImage')}</span>
              </div>
            )}
          </button>
        </div>

        <div className="w-full md:w-2/3">
          {!exifData ? (
             <div className="h-full flex items-center justify-center text-gray-400 italic">
               {t('components.exifExtractor.noExif')}
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <section>
                <h3 className="font-bold text-purple-600 mb-2 border-b-2 border-purple-100 dark:border-purple-900/30">{t('components.exifExtractor.basicInfo')}</h3>
                <InfoItem label={t('components.exifExtractor.make')} value={exifData.Make} />
                <InfoItem label={t('components.exifExtractor.model')} value={exifData.Model} />
                <InfoItem label={t('components.exifExtractor.software')} value={exifData.Software} />
                <InfoItem label={t('components.exifExtractor.dateTime')} value={exifData.DateTimeOriginal?.toLocaleString()} />
              </section>

              <section>
                <h3 className="font-bold text-purple-600 mb-2 border-b-2 border-purple-100 dark:border-purple-900/30">{t('components.exifExtractor.cameraSettings')}</h3>
                <InfoItem label={t('components.exifExtractor.exposure')} value={exifData.ExposureTime ? `1/${1/exifData.ExposureTime}s` : null} />
                <InfoItem label={t('components.exifExtractor.aperture')} value={exifData.FNumber ? `f/${exifData.FNumber}` : null} />
                <InfoItem label={t('components.exifExtractor.iso')} value={exifData.ISO} />
                <InfoItem label={t('components.exifExtractor.focalLength')} value={exifData.FocalLength ? `${exifData.FocalLength}mm` : null} />
              </section>

              <section className="sm:col-span-2">
                <h3 className="font-bold text-purple-600 mb-2 border-b-2 border-purple-100 dark:border-purple-900/30">{t('components.exifExtractor.location')}</h3>
                {exifData.latitude && exifData.longitude ? (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-800 dark:text-gray-200">
                      {exifData.latitude.toFixed(6)}, {exifData.longitude.toFixed(6)}
                    </span>
                    <a 
                      href={`https://www.google.com/maps?q=${exifData.latitude},${exifData.longitude}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors mt-2 sm:mt-0 text-center"
                    >
                      {t('components.exifExtractor.viewOnMaps')}
                    </a>
                  </div>
                ) : (
                  <span className="text-sm text-gray-400 italic">{t('components.exifExtractor.noGps')}</span>
                )}
              </section>
            </div>
          )}

          {exifData && extraTags.length > 0 && (
            <div className="mt-6">
              <button
                onClick={() => setShowAllTags(p => !p)}
                className="text-xs text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium underline underline-offset-2"
              >
                {showAllTags
                  ? t('components.exifExtractor.hideAllTags')
                  : t('components.exifExtractor.showAllTags')}
                ({extraTags.length})
              </button>

              {showAllTags && (
                <div className="mt-3 max-h-64 overflow-y-auto bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                  {extraTags.map(([key, val]) => (
                    <div key={key} className="flex gap-2 text-xs py-1 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="font-mono font-semibold text-gray-600 dark:text-gray-400 min-w-32 shrink-0">{key}</span>
                      <span className="font-mono text-gray-800 dark:text-gray-200 break-all">
                        {val instanceof Date ? val.toLocaleString() : JSON.stringify(val)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExifExtractor;
