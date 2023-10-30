import {
  containOnlyAZNumber,
  containOnlyLetters,
  containOnlyNumber,
  validateEmail,
  validateName,
  validatePhone,
} from "./index";

describe("name validation", () => {
  it("should return false when greater than one hundred characters", () => {
    const result = validateName(
      "123456789101112131415161718192021222324252627282030313233343536373839404142434445464748495051525354555657585960123456789101112131415161718192021222324252627282030313233343536373839404142434445464748495051525354555657585960"
    );

    expect(result).toBeFalsy();
  });

  it("should return false when string contain number or special characteres", () => {
    const result = validateName("!dasdasads");
    const resultNumbers = validateName("3123dsadasgady");

    expect(result).toBeFalsy();
    expect(resultNumbers).toBeFalsy();
  });

  it("should return false when string contain number or special characteres", () => {
    const result = validateName("!dasdasads");
    const resultNumbers = validateName("3123dsadasgady");

    expect(result).toBeFalsy();
    expect(resultNumbers).toBeFalsy();
  });
});

describe("email validation", () => {
  it("should return false when characters before domain contains less six characters", () => {
    const result = validateEmail("mich@hotmail.com");

    expect(result).toBeFalsy();
  });

  it("should return false when characters before domain contains more thirty characters", () => {
    const result = validateName(
      "michell.adisohadshuadshuadshuadsuhadshuadshhuadshuadshadsuhudsahuadsu@hotmail.com"
    );

    expect(result).toBeFalsy();
  });

  it("should return false when characters before domain contains special characteres", () => {
    const result = validateName("adshadsuhads!@hotmail.com");

    expect(result).toBeFalsy();
  });

  it("should return false when characters after domain don't contains gmail.com, hotmail.com or meusite.com.br", () => {
    const result = validateName("adshadsuhadsd@msn.com");

    expect(result).toBeFalsy();
  });
});

describe("phone validation", () => {
  it("should return false when characters contain letters", () => {
    const result = validatePhone("551199994444A");

    expect(result).toBeFalsy();
  });

  it("should return false when contain special characteres", () => {
    const result = validateName("+5511999944444");

    expect(result).toBeFalsy();
  });

  it("should return false when contain more than thirteen characters", () => {
    const result = validateName("88888888888888");

    expect(result).toBeFalsy();
  });

  it("should return false when contain less eight characters", () => {
    const result = validateName("1234567");

    expect(result).toBeFalsy();
  });
});

describe("extra functions validation", () => {
  describe("containOnlyNumber", () => {
    it("should return false when don't contain only Numbers", () => {
      const result = containOnlyNumber("dasadhsuh");

      expect(result).toBeFalsy();
    });

    it("should return true when contain only Numbers", () => {
      const result = containOnlyNumber("123456");

      expect(result).toBeTruthy();
    });
  });

  describe("containOnlyLetters", () => {
    it("should return false when contain numbers", () => {
      const result = containOnlyLetters("123456");

      expect(result).toBeFalsy();
    });

    it("should return false when contain special characteres", () => {
      const result = containOnlyLetters("adsadsads!%");

      expect(result).toBeFalsy();
    });

    it("should return true when contain only letters", () => {
      const result = containOnlyLetters("adsadsads");

      expect(result).toBeTruthy();
    });
  });

  describe("containOnlyAZNumber", () => {
    it("should return false when contain special characteres", () => {
      const result = containOnlyAZNumber("adsadsads!%");

      expect(result).toBeFalsy();
    });

    it("should return true when contain only letters", () => {
      const result = containOnlyAZNumber("adsadsads");

      expect(result).toBeTruthy();
    });

    it("should return true when contain only numbers", () => {
      const result = containOnlyAZNumber("123344");

      expect(result).toBeTruthy();
    });

    it("should return true when contain letters and numbers", () => {
      const result = containOnlyAZNumber("dsaadsads123344");

      expect(result).toBeTruthy();
    });
  });
});
