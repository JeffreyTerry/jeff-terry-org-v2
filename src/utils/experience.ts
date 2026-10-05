// These are computed when the site is built. The deploy workflow rebuilds the
// site weekly so they stay current.

const STARTED_CODING_AT = new Date(2009, 1, 1);

function getYearsSinceDate(date: Date, today: Date): number {
  const differenceInMs = today.getTime() - date.getTime();
  return differenceInMs / (1000 * 3600 * 24 * 365.25);
}

export function getYearsCoding(today = new Date()): number {
  return Math.floor(getYearsSinceDate(STARTED_CODING_AT, today));
}

export function getHoursSpentBuildingSoftware(today = new Date()): string {
  // The initial estimate represents the amount of time I've spent directly building software
  // up to the `initialEstimateMadeOn` date, including:
  // - During MS / HS
  // - During undergrad for personal projects
  // - During on-campus co-ops (i.e. CCEW)
  // - During summer internships
  // - During grad school
  // - As a full-time SWE
  // I've tried to be conservative here since the website will be displaying the value as "X+ hours".
  const initialEstimate = 18000;

  const initialEstimateMadeOn = new Date(2024, 2, 23);
  const yearsSinceInitialEstimate = getYearsSinceDate(initialEstimateMadeOn, today);

  // Add a conservative number of additional hours to the initial estimate just so that it doesn't get super out of date.
  // Ideally, I should update the initial number with a more accurate estimate as time goes on.
  // Note that this number is a bit low because it only includes time spent directly working on building software
  // (i.e. make sure to exclude meetings, etc...).
  const hoursSpentBuildingSoftwarePerYear = 32 * 48;
  const hoursOfExperienceGainedSinceInitialEstimate =
    yearsSinceInitialEstimate * hoursSpentBuildingSoftwarePerYear;

  const totalEstimate = initialEstimate + hoursOfExperienceGainedSinceInitialEstimate;

  // Truncate the estimate to the nearest thousand to make it more readable
  return (Math.floor(totalEstimate / 1000) * 1000).toLocaleString("en-US");
}
