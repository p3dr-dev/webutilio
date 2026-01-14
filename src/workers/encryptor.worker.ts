self.onmessage = async (e) => {
  const { file, password, mode } = e.data;

  try {
    const getPasswordKey = async (password: string): Promise<CryptoKey> => {
      const encoder = new TextEncoder();
      const passwordBuffer = encoder.encode(password);
      return await crypto.subtle.importKey(
        'raw',
        passwordBuffer,
        'PBKDF2',
        false,
        ['deriveKey']
      );
    };

    const deriveEncryptionKey = async (passwordKey: CryptoKey, salt: Uint8Array): Promise<CryptoKey> => {
      return await crypto.subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt: salt,
          iterations: 100000,
          hash: 'SHA-256',
        },
        passwordKey,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
      );
    };

    if (mode === 'encrypt') {
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const fileBuffer = await file.arrayBuffer();

      const passwordKey = await getPasswordKey(password);
      const encryptionKey = await deriveEncryptionKey(passwordKey, salt);

      const encryptedData = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        encryptionKey,
        fileBuffer
      );

      const encryptedBytes = new Uint8Array(encryptedData);
      const resultBuffer = new Uint8Array(salt.length + iv.length + encryptedBytes.length);
      resultBuffer.set(salt, 0);
      resultBuffer.set(iv, salt.length);
      resultBuffer.set(encryptedBytes, salt.length + iv.length);

      const blob = new Blob([resultBuffer], { type: 'application/octet-stream' });
      self.postMessage({ type: 'result', blob, fileName: `${file.name}.enc` });
    } else {
      const fileBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(fileBuffer);

      const salt = bytes.slice(0, 16);
      const iv = bytes.slice(16, 28);
      const encryptedData = bytes.slice(28);

      const passwordKey = await getPasswordKey(password);
      const decryptionKey = await deriveEncryptionKey(passwordKey, salt);

      const decryptedData = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        decryptionKey,
        encryptedData
      );

      const blob = new Blob([decryptedData], { type: 'application/octet-stream' });
      self.postMessage({ type: 'result', blob, fileName: file.name.replace(/\.enc$/, '') });
    }
  } catch (error: any) {
    self.postMessage({ type: 'error', error: error.message });
  }
};
