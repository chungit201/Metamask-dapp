export const ENV: 'dev' | 'prod' = 'dev';

//@ts-ignore
export const DEFAULT_CHAIN_ID = ENV === 'dev' ? 97 : 56;
export const START_SELL = 1650020400 * 1000;
export const UNBOX_TIME = 1650448800 * 1000;
export const PUBLIC_SALE = 1650106800 * 1000;

const DEV_RPC = 'https://data-seed-prebsc-2-s2.binance.org:8545/';
const PROD_RPC = 'https://bsc-dataseed.binance.org/';

const DEV_SERVER_ENDPOINT = 'https://beta-faucet-api.dev.chainverse.xyz';
const PROD_SERVER_ENDPOINT = 'https://market-api.chainverse.org';

const DEV_SERVER_SLIME = 'https://slimeroyale.com/api';
const PROD_SERVER_SLIME = 'https://slimeroyale.com/api';

const DEV_SLIME_GAME = 'https://api-test.slimeroyale.com';
const PROD_SLIME_GAME = 'https://game.slimeroyale.com';

const DEV_API_CHECK_MAINTAIN = 'https://slimeroyale.com/is-maintain-test';
const PROD_API_CHECK_MAINTAIN = 'https://slimeroyale.com/is-maintain';

const DEV_API_CHECK_MAINTAIN_MARKET = 'https://slimeroyale.com/is-maintain-test-market';
const PROD_API_CHECK_MAINTAIN_MARKET = 'https://slimeroyale.com/is-maintain-market';

const DEV_SOCKET = "api-test.slimeroyale.com";
const PROD_SOCKET = "api.slimeroyale.com";

export const SECRET_KEY = '704e47c0e3b3dd89834ec2367af0cd47';
export const NUMBER_BLOCK = 2;

export const PARTNER_ID_DEV = 'US5S8F1N4Q';
export const PARTNER_ID_PROD = 'BHHCQFM1UQ';

const IGO_CONTRACT_DEV = '0x7f2F5de09710ec0533e7079bADcA0b0a9Fb99573';
const IGO_CONTRACT_PROD = '0xab228848BcbA8541f3f5792066a583b7b3238Ae9';

const MARKET_CONTRACT_DEV = '0x2ccA92F66BeA2A7fA2119B75F3e5CB698C252564';
const MARKET_CONTRACT_PROD = '0x3F06739eA30e195F6CC3Ba9E9e50028E2f354A4B';

const SLIME_CONTRACT_DEV = '0x62833F47FE1a9ea1537379161fCb82fe93B6B758';
// const SLIME_CONTRACT_DEV = '0x3e11A9eeBeF8e1877B9679c6ed8A6E2B62effE8c';
const SLIME_CONTRACT_PROD = '0xD2a1D5F1e68f6B97387C2e33CCA9284568772d22';

const USDT_ADDRESS_DEV = '0xe1Df8B289794a9e795141C3dE09a2fF4F3295e69';
const USDT_ADDRESS_PROD = '0x55d398326f99059ff775485246999027b3197955';

export const AGENCY_ADDRESS = '0xFc42365d9d4512569FE3858F4e6695635C19E314';

export const LIST_RPC_TESTNET = [
  'https://data-seed-prebsc-2-s2.binance.org:8545',
  'https://data-seed-prebsc-1-s1.binance.org:8545',
  'https://data-seed-prebsc-1-s3.binance.org:8545',
  'https://data-seed-prebsc-2-s1.binance.org:8545',
  'https://data-seed-prebsc-1-s2.binance.org:8545',
];

export const LIST_RPC_MAINNET = [
  'https://bsc-dataseed1.binance.org',
  'https://bsc-dataseed2.binance.org',
  'https://bsc-dataseed3.binance.org',
  'https://bsc-dataseed4.binance.org',
  'https://bsc-dataseed1.defibit.io',
  'https://bsc-dataseed2.defibit.io',
  'https://bsc-dataseed3.defibit.io',
  'https://bsc-dataseed4.defibit.io',
  'https://bsc-dataseed1.ninicoin.io',
  'https://bsc-dataseed2.ninicoin.io',
  'https://bsc-dataseed3.ninicoin.io',
  'https://bsc-dataseed4.ninicoin.io',
];

export const NATIVE_COIN = '0x0000000000000000000000000000000000000000';

export const COUNTDOWN_TEXT = 'PRE-SALE STARTS IN';

//@ts-ignore
export const SERVER_SOCKET = ENV === 'dev' ? DEV_SOCKET : PROD_SOCKET;

export const SERVER_URI =
  //@ts-ignore
  ENV === 'dev' ? DEV_SERVER_ENDPOINT : PROD_SERVER_ENDPOINT;

export const SERVER_SLIME =
  //@ts-ignore
  ENV === 'dev' ? DEV_SERVER_SLIME : PROD_SERVER_SLIME;

export const SERVER_GAME =
  //@ts-ignore
  ENV === 'dev' ? DEV_SLIME_GAME : PROD_SLIME_GAME;
export const IGO_CONTRACT =
  //@ts-ignore
  ENV === 'dev' ? IGO_CONTRACT_DEV : IGO_CONTRACT_PROD;

export const SLIME_CONTRACT =
  //@ts-ignore
  ENV === 'dev' ? SLIME_CONTRACT_DEV : SLIME_CONTRACT_PROD;

//@ts-ignore
export const RPC = ENV === 'dev' ? DEV_RPC : PROD_RPC;

//@ts-ignore
export const PARTNER_ID = ENV === 'dev' ? PARTNER_ID_DEV : PARTNER_ID_PROD;

export const USDT_ADDRESS =
  //@ts-ignore
  ENV === 'dev' ? USDT_ADDRESS_DEV : USDT_ADDRESS_PROD;

//@ts-ignore
export const API_CHECK_MAINTAIN = ENV === 'dev' ? DEV_API_CHECK_MAINTAIN : PROD_API_CHECK_MAINTAIN;

//@ts-ignore
export const API_CHECK_MAINTAIN_MARKET = ENV === 'dev' ? DEV_API_CHECK_MAINTAIN_MARKET : PROD_API_CHECK_MAINTAIN_MARKET;


const CLAIM_SCE_CONTRACT_DEV = `0x0281E5AD7D4C532d146540e87Cca2eB09085E59F`;
const CLAIM_SCE_CONTRACT_PROD = `0x0281E5AD7D4C532d146540e87Cca2eB09085E59F`;

export const CLAIM_SCE_CONTRACT = ENV === 'dev' ? CLAIM_SCE_CONTRACT_DEV : CLAIM_SCE_CONTRACT_PROD;
export const USDT_TESTNET = {
  currency: '0xe1Df8B289794a9e795141C3dE09a2fF4F3295e69',
  decimal: 18,
  symbol: 'USDT',
};

export const USDT_MAINNET = {
  currency: '0x55d398326f99059fF775485246999027B3197955',
  decimal: 18,
  symbol: 'USDT',
};

//@ts-ignore
export const CURENCY = ENV === 'dev' ? USDT_TESTNET : USDT_MAINNET;
//@ts-ignore
export const MARKET = ENV === 'dev' ? MARKET_CONTRACT_DEV : MARKET_CONTRACT_PROD;
