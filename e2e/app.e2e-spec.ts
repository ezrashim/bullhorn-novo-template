import { BullhornNovoPage } from './app.po';

describe('bullhorn-novo App', () => {
  let page: BullhornNovoPage;

  beforeEach(() => {
    page = new BullhornNovoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
