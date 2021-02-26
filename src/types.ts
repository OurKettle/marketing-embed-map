export type MapSettings = {
  zoom?: number;
  lat?: number;
  lon?: number;
  pitch?: number;
};

export type MapProps = {
  showSpreadLayer?: boolean;
  showFireShapeLayer?: boolean;
  className?: string;
  settings?: MapSettings;
};
