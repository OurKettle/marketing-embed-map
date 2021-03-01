# Marketing Embed Map

### Installation

- In the same directory as your `package.json` create or edit an `.npmrc`

```
registry=https://npm.pkg.github.com/OurKettle
```

- and you may need to authenticate on your server.

```
//npm.pkg.github.com/:_authToken=60968be85728d95edf7a6f1a0ca848b6d773ffcb
@ourkettle:registry=https://npm.pkg.github.com/
```

https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package

```bash
npm i @ourkettle/marketing-embed-map
```

### Usage

Example:

```javascript
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EmbedMap from "@ourkettle/marketing-embed-map";
const useStyles = makeStyles((theme) => ({
  baseMap: {
    width: "100%",
    height: 400,
  },
}));

export default function () {
  const classes = useStyles();

  const [showSpread, setShowSpread] = useState(true);
  const [showFire, setShowFire] = useState(true);

  return (
    <div>
      <EmbedMap
        className={classes.baseMap}
        showSpreadLayer={showSpread}
        showFireShapeLayer={showFire}
      ></EmbedMap>
      <button onClick={() => setShowSpread(!showSpread)}>
        {!showSpread ? "Show Spread" : "Hide Spread"}
      </button>

      <button onClick={() => setShowFire(!showFire)}>
        {!showFire ? "Show Fire" : "Hide Fire"}
      </button>
    </div>
  );
}
```

### Testing Locally

- `git clone git@github.com:OurKettle/marketing-embed-map.git`
- Run `npm link` inside package root after cloning.
- From your project root run `npm link path/to/marketing-embed-map`.
- From your project root run `npm link path/to/marketing-embed-map/node_modules/react`.
- Import normally:

```javascript
import EmbedMap from "marketing-embed-map";
```
