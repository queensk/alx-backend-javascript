interface MajorCredits {
    brand: "majorCredits";
    credits: number;
  }
  
  interface MinorCredits {
    brand: "minorCredits";
    credits: number;
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      brand: "majorCredits",
      credits: subject1.credits + subject2.credits
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      brand: "minorCredits",
      credits: subject1.credits + subject2.credits
    };
  }
  