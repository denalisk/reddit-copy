import { SaidditPage } from './app.po';

describe('saiddit App', () => {
  let page: SaidditPage;

  beforeEach(() => {
    page = new SaidditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
