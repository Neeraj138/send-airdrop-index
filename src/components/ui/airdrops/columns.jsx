export const columns = [
  {
    header: "Icon",
    accessorKey: "tokenIcon",
    cell: ({ row }) =>
      row.getValue("tokenIcon") ? (
        <img src={row.getValue("tokenIcon")} alt="Token Icon" className="w-8 h-8" />
      ) : (
        <div className="skeleton w-8 h-8 bg-blue-700 items-center flex justify-center">?</div>
      ),
  },
  {
    header: "Project Name",
    accessorKey: "projectName",
  },
  {
    header: "Contract Address",
    accessorKey: "ca",
  },
  {
    header: "Price",
    accessorKey: "tokenPrice",
    cell: ({ row }) =>
      row.getValue("tokenPrice") === "Loading..." ? (
        <div className="skeleton w-16 h-5"></div>
      ) : (
        `${row.getValue("tokenPrice")}`
      ),
  },
  {
    header: "Loyalty Group Exclusive",
    accessorKey: "isSendLoyaltyExclusive",
    cell: ({ row }) => {
      const isExclusive = row.getValue("isSendLoyaltyExclusive") ? "Yes" : "No"
      return isExclusive
    }
  },
  {
    header: "Approx. Tokens Airdropped",
    accessorKey: "approxTokensAirdropped"
  },
  {
    header: "Approx. Current Value in USD",
    cell: ({ row }) => {
      const currVal = parseFloat(row.getValue("tokenPrice") * row.getValue("approxTokensAirdropped"))
      return currVal.toFixed(2)
    }
  },
  {
    header: "Approx. ATH Value in USD",
    cell: ({ row }) => {
      const currVal = parseFloat(row.original.athPrice * row.getValue("approxTokensAirdropped"))
      return currVal.toFixed(2)
    }
  },
  {
    header: "Eligibility",
    accessorKey: "eligibility"
  },
  {
    header: "X Announcement",
    accessorKey: "announcementLink",
    cell: ({ row }) => {
      const link = row.getValue("announcementLink")
      return <a href={`${link}`} target="_blank">{link}</a>
    }
  },
  {
    header: "Claim Link",
    accessorKey: "claimLink",
    cell: ({ row }) => {
      const link = row.getValue("claimLink");
  
      const isValidURL = (url) => {
        try {
          const parsedURL = new URL(url);
          return parsedURL.protocol === "http:" || parsedURL.protocol === "https:";
        } catch (error) {
          return false;
        }
      };
  
      if (row.original.directWallet) {
        return <div>Direct Wallet</div>;
      }
  
      return isValidURL(link) ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      ) : (
        <div className="">{link}</div>
      );
    }
  }
];
