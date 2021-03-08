export function getSize(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height
  };
}

let id = 1;

export function generateId() {
  return id++;
}