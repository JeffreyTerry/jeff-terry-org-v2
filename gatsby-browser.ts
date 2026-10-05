// Global CSS imported here is inlined into the server-rendered HTML, so it
// applies before any JS runs. This prevents layout shift on load.
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

// FontAwesome normally injects its CSS at runtime, which leaves the
// server-rendered icons unstyled (and huge) until JS loads.
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
