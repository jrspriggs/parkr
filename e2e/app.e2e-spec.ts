import { ParkrPage } from './app.po';

describe('parkr App', () => {
  let page: ParkrPage;

  beforeEach(() => {
    page = new ParkrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
