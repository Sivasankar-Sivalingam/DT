import { DeploymentTrackerPage } from './app.po';

describe('edureka-certification App', () => {
  let page: DeploymentTrackerPage;

  beforeEach(() => {
    page = new DeploymentTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
