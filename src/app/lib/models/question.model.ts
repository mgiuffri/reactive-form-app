import {Validator} from './validator.model';

export interface Question {
    name: string;
    questionText: string;
    initialValue?: any;
    answers: string[];
    type: string;
    validations?: Validator[];
}
