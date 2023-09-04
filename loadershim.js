// Makes jest & gatsby play nicely together
global.___loader = {
  enqueue: jest.fn(),
}