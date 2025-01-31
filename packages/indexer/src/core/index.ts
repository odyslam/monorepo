import { BridgeContext } from '@nomad-xyz/sdk-bridge';
import { ProcessorV2 } from './consumerV2';
import { Orchestrator } from './orchestrator';
import * as dotenv from 'dotenv';
import { IndexerCollector } from './metrics';
import { DB } from './db';
import Logger from 'bunyan';
import { getRedis } from './redis';
dotenv.config({});

export async function run(
  sdk: BridgeContext,
  db: DB,
  logger: Logger,
  metrics: IndexerCollector,
): Promise<void> {
  const redis = getRedis();

  await redis.connect();

  const c = new ProcessorV2(db, logger, redis, sdk);

  const o = new Orchestrator(sdk, c, metrics, logger, db, redis);
  o.subscribeStatisticEvents();

  await o.init();
  await o.startConsuming();
}
