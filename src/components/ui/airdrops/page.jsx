// src/components/payments/page.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { AIRDROP_DATA } from "@/utils/Constants";

// Function to fetch data from DexScreener API
async function fetchTokenData(cas) {
  const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${cas}`);
  if (!response.ok) {
    throw new Error("Failed to fetch token data");
  }

  const { pairs } = await response.json();

  const tokenData = pairs.map((pair) => ({
    tokenName: pair.baseToken.name,
    ca: pair.baseToken.address,
    tokenPrice: pair.priceUsd,
    tokenIcon: pair.info?.imageUrl, // Placeholder if icon is not available
  }));

  return tokenData;
}

export default function DemoPage() {
  // Extract all contract addresses (CAs) from AIRDROP_DATA
  const cas = Object.values(AIRDROP_DATA)
    .map((item) => item.ca)
    .join(",");

  // Use React Query to fetch and refresh data every 1 second
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["tokenData", cas],
    queryFn: () => fetchTokenData(cas),
    refetchInterval: 10000, // Refetch every 1 second
    staleTime: 10000,       // Keep data fresh for 1 second
  });

  // Combine API data with hardcoded details from AIRDROP_DATA
  const tableData = Object.values(AIRDROP_DATA).map((item) => {
    const apiData = data.find((token) => token.ca === item.ca);
    return {
      projectName: apiData?.tokenName,
      ca: item.ca,
      tokenPrice: apiData?.tokenPrice || "Loading...",
      tokenIcon: apiData?.tokenIcon || null, // Skeleton if not loaded
      isSendLoyaltyExclusive: item.isSendLoyaltyExclusive,
      eligibility: item.eligibility,
      announcementLink: item.announcementLink,
      claimLink: item.claimLink,
      directWallet: item.directWallet,
      approxTokensAirdropped: item.approxTokensAirdropped,
      athPrice: item.athPrice
    };
  });

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}
