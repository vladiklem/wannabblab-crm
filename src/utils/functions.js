export const toArray = (mentors) => Object.keys(mentors).map(
    (key) => ({ id: key, ...mentors[key] }),
) || [];

export const toObject = (mentors) => mentors.reduce(
    (acc, mentor) => ({ ...acc, [mentor.id]: mentor }),
    {},
);
