export const getTime24hours = (): string => {
  const now = new Date();
  let mins: number | string = now.getMinutes();
  let hours: number | string = now.getHours();

  if(hours < 10) {
    hours = `0${hours}`
  }

  if (mins < 10) {
    mins = `0${mins}`
  }

  return `${hours}:${mins}`
};

export const getTime12Hours = (): string => {
  const now = new Date();
  let mins: number | string = now.getMinutes();
  let hours: number | string = now.getHours();

  hours = hours % 12;
  hours = hours ? hours : 12;

  if (mins < 10) {
    mins = `0${mins}`
  }

  return `${hours}:${mins}`
};

export const scrollToBottom = (elementToBeScrolled: Element): void => {
  elementToBeScrolled.scrollTop = elementToBeScrolled.scrollHeight;
};

export const isPageActive = (pageHash: string): boolean => window.location.hash.split('/')[1] === pageHash;