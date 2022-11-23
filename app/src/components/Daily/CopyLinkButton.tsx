import React, { useState, useCallback } from 'react';
import Button from './Button';

type Props = {
  roomUrl: string;
};

const CopyLinkButton = (props: Props) => {
  const [showCopied, setShowCopied] = useState(false);

  const copy = useCallback(() => {
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  }, [props.roomUrl]);

  return (
    <Button
      type="secondary"
      onPress={copy}
      disabled={showCopied}
      label={showCopied ? 'Copied!' : 'Copy room link'}
    />
  );
};

export default CopyLinkButton;
