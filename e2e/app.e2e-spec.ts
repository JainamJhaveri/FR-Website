import { FrWebsitePage } from './app.po';

describe('fr-website App', () => {
  let page: FrWebsitePage;

  beforeEach(() => {
    page = new FrWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('app works!');
  });
});
