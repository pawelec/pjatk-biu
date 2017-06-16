import { ProjectBIUPage } from './app.po';

describe('project-biu App', () => {
  let page: ProjectBIUPage;

  beforeEach(() => {
    page = new ProjectBIUPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
