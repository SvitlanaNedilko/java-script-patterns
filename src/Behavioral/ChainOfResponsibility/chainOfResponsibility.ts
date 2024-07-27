interface SupportRequest {
  description: string;
  level: number;
}

abstract class SupportHandler {
  protected nextHandler?: SupportHandler;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: SupportRequest): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}

class LevelOneSupport extends SupportHandler {
  handle(request: SupportRequest): void {
    if (request.level === 1) {
      console.log('Level 1 support handled the request');
    } else {
      super.handle(request);
    }
  }
}

class LevelTwoSupport extends SupportHandler {
  handle(request: SupportRequest): void {
    if (request.level === 2) {
      console.log('Level 2 support handled the request');
    } else {
      super.handle(request);
    }
  }
}

class LevelThreeSupport extends SupportHandler {
  handle(request: SupportRequest): void {
    if (request.level === 3) {
      console.log('Level 3 support handled the request');
    } else {
      super.handle(request);
    }
  }
}

const levelOneSupport = new LevelOneSupport();
const levelTwoSupport = new LevelTwoSupport();
const levelThreeSupport = new LevelThreeSupport();

levelOneSupport.setNext(levelTwoSupport).setNext(levelThreeSupport);

const request: SupportRequest = { description: 'Need help with software', level: 2 };

levelOneSupport.handle(request);
