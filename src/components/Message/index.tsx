type MessageProps = {
  message: string | undefined;
};

export function Message({ message }: MessageProps) {
  if (!message) {
    return null;
  }
  return <div>{message}</div>;
}
