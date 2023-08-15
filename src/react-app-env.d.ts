/// <reference types="react-scripts" />

// ******* React types ******* //

import * as React from "react";

interface WithChildren {
  children?: ReactNode | undefined;
}
declare module "react" {
  type FCC<P = {}> = FunctionComponent<WithChildren & P>;
}
