import { RuleSet } from 'styled-components';

export type TCssRule = RuleSet<object>;

export interface ISearcher {
  cssRule: TCssRule;
}
