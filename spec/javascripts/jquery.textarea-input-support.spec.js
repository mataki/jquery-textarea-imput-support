/* global describe, beforeEach, it, expect, $ */
describe('jquery.textarea-input-support', function(){
  describe('getPositionWord', function(){
    var text, pos;

    beforeEach(function(){
      text = "abcd efgh　\n1234 xyz";
    });

    it("should return abcd when pos is 2", function(){
      expect($.getPositionWord(text, 2).text).toEqual("abcd");
    });
    it("should return efgh when pos is 7", function(){
      expect($.getPositionWord(text, 7).text).toEqual('efgh');
    });
    it("should return 1234 when pos is 12", function(){
      expect($.getPositionWord(text, 12).text).toEqual('1234');
    });
    it("should return xyz when pos is 17", function(){
      expect($.getPositionWord(text, 17).text).toEqual('xyz');
    });
    it("should return efgh when pos is 9", function(){
      expect($.getPositionWord(text, 9).text).toEqual('efgh');
    });

  });
});
