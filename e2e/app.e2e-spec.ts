import { MasterNgProjectPage } from './app.po';

describe('master-ng-project App', () => {
  let page: MasterNgProjectPage;

  beforeEach(() => {
    page = new MasterNgProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
