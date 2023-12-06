import * as Types from "../../../types.generated";

import { gql } from "@apollo/client";
export type RocketItemFragment = {
  __typename?: "Rocket";
  id?: string | null;
  description?: string | null;
  name?: string | null;
};

export const RocketItemFragmentDoc = gql`
  fragment RocketItem on Rocket {
    id
    description
    name
  }
`;
