import { StackContext, NextjsSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const website = new NextjsSite(stack, "website", {
    path: "packages/website",
    customDomain: {
      domainName:
        stack.stage === "production"
          ? "www.accelerated.store"
          : `wwww.${stack.stage}.accelerated.store`,
      domainAlias:
        stack.stage === "production"
          ? "accelerated.store"
          : `${stack.stage}.accelerated.store`,
      hostedZone: "accelerated.store",
    },
  });

  stack.addOutputs({
    website: website.customDomainUrl,
  });
}
