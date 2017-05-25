import { GaurdRoutesAppPage } from './app.po';

describe('gaurd-routes-app App', function() {
  let page: GaurdRoutesAppPage;

  beforeEach(() => {
    page = new GaurdRoutesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
