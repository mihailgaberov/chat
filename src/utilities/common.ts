export const getTime24hours = (): string => {
  const now = new Date();
  let mins: number | string = now.getMinutes();
  let hours: number | string = now.getHours();

  if (hours < 10) {
    hours = `0${hours}`
  }

  if (mins < 10) {
    mins = `0${mins}`
  }

  return `${hours}:${mins}`
};

export const getTime12Hours = (): string => {
  const now = new Date();
  let minutes: number | string = now.getMinutes();
  let hours: number | string = now.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutes}${ampm}`;
};

export const scrollToBottom = (elementToBeScrolled: Element): void => {
  elementToBeScrolled.scrollTop = elementToBeScrolled.scrollHeight;
};

export const isPageActive = (pageHash: string): boolean => window.location.hash.split('/')[1] === pageHash;
