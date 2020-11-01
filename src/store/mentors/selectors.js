export const selectMentorById = (id) => (state) => state.mentors.filter((mentor) => mentor.id === id);
