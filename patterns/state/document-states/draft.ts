import { logger } from '../../../utils/logger';
import Document from '../Document';
import { DocumentState } from '../types';
import ReviewState from './review';

export default class DraftState implements DocumentState {
  review(document: Document, text?: string): void {
    logger.green(`- Sending document '${document.name}' for review.`);
    document.text = text ?? '';
    document.setState(new ReviewState());
  }
  approve(document: Document): void {
    logger.green(
      `- Cannot approve document '${document.name}' in draft state!`
    );
  }
  publish(document: Document): void {
    logger.green(
      `- Cannot publish document '${document.name}' in draft state!`
    );
  }
}
