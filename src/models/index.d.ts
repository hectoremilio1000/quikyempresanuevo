import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type BLOGMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerBLOG = {
  readonly id: string;
  readonly titulo?: string | null;
  readonly subtitulo?: string | null;
  readonly texto1?: string | null;
  readonly imagen1?: string | null;
  readonly url1?: string | null;
  readonly texto2?: string | null;
  readonly imagen2?: string | null;
  readonly url2?: string | null;
  readonly texto3?: string | null;
  readonly imagen3?: string | null;
  readonly url3?: string | null;
  readonly autor?: string | null;
  readonly fecha?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBLOG = {
  readonly id: string;
  readonly titulo?: string | null;
  readonly subtitulo?: string | null;
  readonly texto1?: string | null;
  readonly imagen1?: string | null;
  readonly url1?: string | null;
  readonly texto2?: string | null;
  readonly imagen2?: string | null;
  readonly url2?: string | null;
  readonly texto3?: string | null;
  readonly imagen3?: string | null;
  readonly url3?: string | null;
  readonly autor?: string | null;
  readonly fecha?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BLOG = LazyLoading extends LazyLoadingDisabled ? EagerBLOG : LazyBLOG

export declare const BLOG: (new (init: ModelInit<BLOG, BLOGMetaData>) => BLOG) & {
  copyOf(source: BLOG, mutator: (draft: MutableModel<BLOG, BLOGMetaData>) => MutableModel<BLOG, BLOGMetaData> | void): BLOG;
}