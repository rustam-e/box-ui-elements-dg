/**
 * @flow
 * @file Preview sidebar nav component
 * @author Box
 */

import * as React from 'react';
import type { InjectIntlProvidedProps } from 'react-intl';
import { injectIntl } from 'react-intl';
import {
    SIDEBAR_DOCGEN,
    SIDEBAR_VIEW_ACTIVITY,
    SIDEBAR_VIEW_DETAILS,
    SIDEBAR_VIEW_METADATA,
    SIDEBAR_VIEW_SKILLS,
} from '../../constants';
import BoxSign28 from '../../icon/logo/BoxSign28';
import IconChatRound from '../../icons/general/IconChatRound';
import IconDocInfo from '../../icons/general/IconDocInfo';
import IconMagicWand from '../../icons/general/IconMagicWand';
import IconMetadataThick from '../../icons/general/IconMetadataThick';
import { SIDEBAR_NAV_TARGETS } from '../common/interactionTargets';
import messages from '../common/messages';
import './SidebarNav.scss';
import SidebarNavButton from './SidebarNavButton';
import SidebarNavTablist from './SidebarNavTablist';
import SidebarToggle from './SidebarToggle';
import AdditionalTabs from './additional-tabs';
import type { AdditionalSidebarTab } from './flowTypes';

type Props = {
    additionalTabs?: Array<AdditionalSidebarTab>,
    elementId: string,
    fileId: string,
    hasActivity: boolean,
    hasAdditionalTabs: boolean,
    hasDetails: boolean,
    hasMetadata: boolean,
    hasSkills: boolean,
    isOpen?: boolean,
    onNavigate?: (SyntheticEvent<>, NavigateOptions) => void,
} & InjectIntlProvidedProps;

const SidebarNav = ({
    additionalTabs,
    elementId,
    fileId,
    hasActivity,
    hasAdditionalTabs,
    hasDetails,
    hasMetadata,
    hasSkills,
    intl,
    isOpen,
    onNavigate,
}: Props) => {
    return (
        <div className="bcs-SidebarNav" aria-label={intl.formatMessage(messages.sidebarNavLabel)}>
            <div className="bcs-SidebarNav-tabs">
                <SidebarNavTablist elementId={elementId} isOpen={isOpen} onNavigate={onNavigate}>
                    {hasActivity && (
                        <SidebarNavButton
                            data-resin-target={SIDEBAR_NAV_TARGETS.ACTIVITY}
                            data-testid="sidebaractivity"
                            sidebarView={SIDEBAR_VIEW_ACTIVITY}
                            tooltip={intl.formatMessage(messages.sidebarActivityTitle)}
                        >
                            <IconChatRound />
                        </SidebarNavButton>
                    )}
                    {hasDetails && (
                        <SidebarNavButton
                            data-resin-target={SIDEBAR_NAV_TARGETS.DETAILS}
                            data-testid="sidebardetails"
                            sidebarView={SIDEBAR_VIEW_DETAILS}
                            tooltip={intl.formatMessage(messages.sidebarDetailsTitle)}
                        >
                            <IconDocInfo />
                        </SidebarNavButton>
                    )}
                    {hasSkills && (
                        <SidebarNavButton
                            data-resin-target={SIDEBAR_NAV_TARGETS.SKILLS}
                            data-testid="sidebarskills"
                            sidebarView={SIDEBAR_VIEW_SKILLS}
                            tooltip={intl.formatMessage(messages.sidebarSkillsTitle)}
                        >
                            <IconMagicWand />
                        </SidebarNavButton>
                    )}
                    {hasMetadata && (
                        <SidebarNavButton
                            data-resin-target={SIDEBAR_NAV_TARGETS.METADATA}
                            data-testid="sidebarmetadata"
                            sidebarView={SIDEBAR_VIEW_METADATA}
                            tooltip={intl.formatMessage(messages.sidebarMetadataTitle)}
                        >
                            <IconMetadataThick />
                        </SidebarNavButton>
                    )}
                    <SidebarNavButton
                        data-resin-target={SIDEBAR_NAV_TARGETS.DOCGEN}
                        sidebarView={SIDEBAR_DOCGEN}
                        tooltip="Box Docgen"
                    >
                        <BoxSign28 className="bcs-SidebarNavSignButton-icon" />
                    </SidebarNavButton>
                </SidebarNavTablist>

                {hasAdditionalTabs && (
                    <div className="bcs-SidebarNav-overflow">
                        <AdditionalTabs key={fileId} tabs={additionalTabs} />
                    </div>
                )}
            </div>
            <div className="bcs-SidebarNav-footer">
                <SidebarToggle isOpen={isOpen} />
            </div>
        </div>
    );
};
export default injectIntl(SidebarNav);
