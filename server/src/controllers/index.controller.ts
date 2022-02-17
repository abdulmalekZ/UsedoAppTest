import { randomUUID } from 'crypto';
import { NextFunction, Request, Response } from 'express';
import { LoremIpsum } from 'lorem-ipsum';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public getList = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const list = [];
      for (let i = 0; i < 10; i++) {
        const lorem = new LoremIpsum({
          sentencesPerParagraph: {
            max: 8,
            min: 4,
          },
          wordsPerSentence: {
            max: 32,
            min: 16,
          },
        });
        const item = {
          id: randomUUID(),
          title: lorem.generateWords(7),
          data: lorem.generateParagraphs(4),
        };
        list.push(item);
      }
      res.send({ items: list });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
