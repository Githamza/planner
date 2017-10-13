import { ProjectttPage } from './app.po';

describe('projecttt App', () => {
  let page: ProjectttPage;

  beforeEach(() => {
    page = new ProjectttPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
