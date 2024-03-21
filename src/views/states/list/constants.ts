import NodeNetworkStateModel from 'src/console-models/NodeNetworkStateModel';

import { getResourceUrl } from '@utils/helpers';

export const baseListUrl = getResourceUrl({ model: NodeNetworkStateModel });

export const FILTER_TYPES = {
  INTERFACE_STATE: 'interface-state',
  INTERFACE_TYPE: 'interface-type',
  IP_FILTER: 'ip-filter',
  IP_ADDRESS: 'ip-address',
  LLDP: 'lldp',
} as const;

export const LLDP_ENABLED = 'enabled';
export const LLDP_DISABLED = 'disabled';
