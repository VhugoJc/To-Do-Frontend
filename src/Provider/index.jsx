import React from "react";

const Providers = ({ providers, children }) => {
    const renderProvider = (providers, children) => {
        const [provider, ...restProviders] = providers;

        if (provider) {
            return React.cloneElement(
                provider,
                null,
                renderProvider(restProviders, children)
            )
        }

        return children;
    }
    return renderProvider(providers, children);
}

export default Providers;