import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SearchField } from '../components/SearchField';
import { ProfileCard } from '../components/ProfileCard';
import { AvatarLabel } from '../components/AvatarLabel';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

const meta: Meta = {
    title: 'Plains/Overview',
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

// ── Seed data ─────────────────────────────────────────────────────────────────

type AvatarColor =
    | 'sky'
    | 'longhorn'
    | 'pecan'
    | 'bluebonnet'
    | 'prickly-pear'
    | 'mesa';

type BadgeVariant =
    | 'sky'
    | 'longhorn'
    | 'pecan'
    | 'bluebonnet'
    | 'prickly-pear'
    | 'outline';

interface Contact {
    id: number;
    name: string;
    initials: string;
    email: string;
    phone: string;
    city: string;
    status: string;
    color: AvatarColor;
    badgeVariant: BadgeVariant;
    bio?: string;
}

const CONTACTS: Contact[] = [
    {
        id: 1,
        name: 'Willie Nelson',
        initials: 'WN',
        email: 'willie@austin.tx',
        phone: '(512) 555-0101',
        city: 'Austin',
        status: 'Friend',
        color: 'longhorn',
        badgeVariant: 'longhorn',
        bio: 'Outlaw country legend, farm aid founder, and proud Texan from Abbott.'
    },
    {
        id: 2,
        name: 'Selena Quintanilla',
        initials: 'SQ',
        email: 'selena@corpuschristi.tx',
        phone: '(361) 555-0202',
        city: 'Corpus Christi',
        status: 'Acquaintance',
        color: 'prickly-pear',
        badgeVariant: 'prickly-pear'
    },
    {
        id: 3,
        name: 'Matthew McConaughey',
        initials: 'MM',
        email: 'matthew@uvalde.tx',
        phone: '(830) 555-0303',
        city: 'Uvalde',
        status: 'Colleague',
        color: 'pecan',
        badgeVariant: 'pecan'
    },
    {
        id: 4,
        name: 'Barbara Jordan',
        initials: 'BJ',
        email: 'barbara@houston.tx',
        phone: '(713) 555-0404',
        city: 'Houston',
        status: 'Family',
        color: 'bluebonnet',
        badgeVariant: 'bluebonnet',
        bio: 'First Southern Black woman elected to Congress. A giant of Texas politics.'
    },
    {
        id: 5,
        name: 'Buddy Holly',
        initials: 'BH',
        email: 'buddy@lubbock.tx',
        phone: '(806) 555-0505',
        city: 'Lubbock',
        status: 'Friend',
        color: 'sky',
        badgeVariant: 'sky'
    },
    {
        id: 6,
        name: 'Sam Houston',
        initials: 'SH',
        email: 'sam@washington-on-the-brazos.tx',
        phone: '(979) 555-0606',
        city: 'Washington-on-the-Brazos',
        status: 'Colleague',
        color: 'mesa',
        badgeVariant: 'outline',
        bio: 'President of the Republic of Texas. Commander in chief. All-around legend.'
    }
];

// ── Page: Contacts Directory ──────────────────────────────────────────────────

function ContactsDirectoryPage() {
    const [search, setSearch] = React.useState('');

    const filtered = CONTACTS.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.city.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-4xl space-y-6 px-6 py-8">
                <PageHeader
                    title="Contacts"
                    subtitle={`${filtered.length} contact${
                        filtered.length !== 1 ? 's' : ''
                    }`}
                    actions={
                        <>
                            <Button variant="outline" size="sm">
                                Export
                            </Button>
                            <Button size="sm">New Contact</Button>
                        </>
                    }
                />

                <SearchField
                    placeholder="Search by name, city, or email…"
                    value={search}
                    onValueChange={setSearch}
                />

                {filtered.length === 0 ? (
                    <p className="py-12 text-center text-pecan/50">
                        No contacts found for "{search}"
                    </p>
                ) : (
                    <div className="overflow-hidden rounded-lg border border-pecan/10 bg-white">
                        {filtered.map((contact) => (
                            <div
                                key={contact.id}
                                className="flex items-center justify-between border-b border-pecan/8 px-6 py-4 last:border-0"
                            >
                                <AvatarLabel
                                    initials={contact.initials}
                                    avatarColor={contact.color}
                                    name={contact.name}
                                    subtitle={contact.email}
                                />
                                <div className="flex items-center gap-3">
                                    <Badge variant={contact.badgeVariant}>
                                        {contact.status}
                                    </Badge>
                                    <span className="hidden text-sm text-pecan/50 sm:block">
                                        {contact.city}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export const ContactsDirectory: Story = {
    name: 'Contacts Directory',
    render: () => <ContactsDirectoryPage />
};

// ── Page: Contact Profile ─────────────────────────────────────────────────────

function ContactProfilePage({ contact }: { contact: Contact }) {
    const [deleted, setDeleted] = React.useState(false);

    if (deleted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-mesa/20 font-sans">
                <div className="text-center text-pecan/60">
                    <p className="text-lg font-medium">Contact removed.</p>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3"
                        onClick={() => setDeleted(false)}
                    >
                        Undo
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-2xl space-y-6 px-6 py-8">
                <PageHeader
                    eyebrow="Contacts"
                    title={contact.name}
                    actions={
                        <>
                            <Button variant="outline" size="sm">
                                Edit
                            </Button>
                            <ConfirmDialog
                                title={`Delete ${contact.name}?`}
                                description="This will permanently remove them from your contacts. This cannot be undone."
                                confirmLabel="Delete"
                                cancelLabel="Keep"
                                variant="destructive"
                                onConfirm={() => setDeleted(true)}
                                trigger={
                                    <Button variant="destructive" size="sm">
                                        Delete
                                    </Button>
                                }
                            />
                        </>
                    }
                />

                <ProfileCard
                    initials={contact.initials}
                    avatarColor={contact.color}
                    name={contact.name}
                    role={contact.city}
                    bio={contact.bio}
                    badge={contact.status}
                    badgeVariant={contact.badgeVariant}
                    actions={
                        <>
                            <Button variant="outline" size="sm">
                                Message
                            </Button>
                            <Button size="sm">Call</Button>
                        </>
                    }
                />

                <div className="rounded-lg border border-pecan/10 bg-white p-6 space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-pecan/50">
                        Contact Info
                    </h2>
                    {[
                        { label: 'Email', value: contact.email },
                        { label: 'Phone', value: contact.phone },
                        { label: 'City', value: contact.city }
                    ].map(({ label, value }) => (
                        <div key={label}>
                            <p className="text-xs text-pecan/40 uppercase tracking-wide mb-0.5">
                                {label}
                            </p>
                            <p className="text-sm text-pecan">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const ContactProfile: Story = {
    name: 'Contact Profile — Willie Nelson',
    render: () => <ContactProfilePage contact={CONTACTS[0]!} />
};

export const ContactProfileIcons: Story = {
    name: 'Contact Profile — Barbara Jordan',
    render: () => <ContactProfilePage contact={CONTACTS[3]!} />
};
