import { BullhornNovoTemplatePage } from './app.po';

describe('bullhorn-novo-template App', () => {
  let page: BullhornNovoTemplatePage;

  beforeEach(() => {
    page = new BullhornNovoTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
