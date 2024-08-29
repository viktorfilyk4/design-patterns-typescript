import { logger } from '../../../utils/logger';
import Document from '../Document';
import { DocumentState } from '../types';
import PublishedState from './published';
import ReviewState from './review';

export default class ApprovedState implements DocumentState {
  review(document: Document, text?: string): void {
    logger.green(`- Sending document '${document.name}' for review.`);
    document.text = text ?? '';
    document.approvedBy = '';
    document.setState(new ReviewState());
  }
  approve(document: Document): void {
    logger.green(`- Document '${document.name}' is already approved.`);
  }
  publish(document: Document, publisher?: string): void {
    logger.green(`- Publishing '${document.name}'`);
    document.publishedBy = publisher ?? '';
    document.setState(new PublishedState());
  }
}
