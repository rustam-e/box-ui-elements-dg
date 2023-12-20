// @ts-check
/**
 * @flow
 * @file Sign sidebar component
 * @author Box
 */

import flow from 'lodash/flow';
import * as React from 'react';
import type { ErrorContextProps } from '../../common/types/api';
import type { WithLoggerProps } from '../../common/types/logging';
import { ORIGIN_METADATA_SIDEBAR, SIDEBAR_VIEW_METADATA } from '../../constants';
import { mark } from '../../utils/performance';
import { withAPIContext } from '../common/api-context';
import { withErrorBoundary } from '../common/error-boundary';
import { withLogger } from '../common/logger';
import { EVENT_JS_READY } from '../common/logger/constants';
import SidebarContent from './SidebarContent';

type ExternalProps = {
    isFeatureEnabled: boolean,
};

type DocgenTag = {
    content: string,
    id: string,
};

type Props = {
    isLoading: boolean,
    tags: Array<DocgenTag>,
} & ExternalProps &
    ErrorContextProps &
    WithLoggerProps;

type State = {};

const MARK_NAME_JS_READY = `${ORIGIN_METADATA_SIDEBAR}_${EVENT_JS_READY}`;

mark(MARK_NAME_JS_READY);

// TO DO: implement actual sidebar content in separate tickets

class DocgenSidebar extends React.PureComponent<Props, State> {
    state = {};

    render() {
        const { isLoading, tags }: State = this.props;

        return (
            <SidebarContent sidebarView={SIDEBAR_VIEW_METADATA} title="Box Docgen">
                <input placeholder="Search" />
                {isLoading ? (
                    'Loading'
                ) : (
                    <div>
                        {tags.map(tag => (
                            <p key={tag.id}>{tag.content}</p>
                        ))}
                    </div>
                )}
            </SidebarContent>
        );
    }
}

export type DocgenSidebarProps = ExternalProps;
export { DocgenSidebar as DocgenSidebarComponent };
export default flow([withLogger(ORIGIN_METADATA_SIDEBAR), withErrorBoundary(ORIGIN_METADATA_SIDEBAR), withAPIContext])(
    DocgenSidebar,
);
