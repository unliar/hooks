import {
  FunctionStructure,
  SpecStructure,
} from '@midwayjs/serverless-spec-builder'
import { LambdaParam } from './http'

export interface HooksSpecStructure
  extends Omit<SpecStructure, 'functionsRule'> {
  apiGateway?: {
    type?: string
  }
  functionsRule?: FunctionsRule
  hooks?: {
    runtime?: 'compiler' | 'async_hooks'
  }
}

export interface FunctionsRule {
  /**
   * @internal
   */
  source?: string
  rules: FunctionRule[]
}

export interface FunctionRule {
  baseDir: string
  events: {
    http?: {
      basePath: string
      underscore?: boolean
    }
    [event: string]: any
  }
}

export interface MidwayHooksFunctionStructure extends FunctionStructure {
  deployName: string
  handler: string
  // dist path
  sourceFilePath?: string
  // sourceFile
  sourceFile?: string
  exportFunction?: string
  isFunctional?: boolean
  argsPath?: string
  gatewayConfig: Partial<LambdaParam>
  event: FunctionRule['events']
}