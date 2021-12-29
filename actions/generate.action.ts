// import chalk from 'chalk';
import { Answers } from 'inquirer';
import { Input } from '../commands';

import { MESSAGES } from '../lib/ui';
import { AbstractAction } from './abstract.action';

export class GenerateAction extends AbstractAction {
  public async handle(inputs: Input[], options: Input[]) {
    await generateFiles(inputs.concat(options));
  }
}

const generateFiles = async (inputs: Input[]) => {
  const collectionOption = inputs.find(
    (option) => option.name === 'collection',
  )!.value as string;
  const schematic = inputs.find((option) => option.name === 'schematic')!
    .value as string;
  const appName = inputs.find((option) => option.name === 'project')!
    .value as string;
  const spec = inputs.find((option) => option.name === 'spec');
  console.log(collectionOption, schematic, appName, spec);
};