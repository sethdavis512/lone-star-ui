import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
    title: 'Sparks/Typography',
    parameters: { layout: 'padded' },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

function Section({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="space-y-6">
            <h2 className="font-slab border-b border-pecan/15 pb-3 text-xs font-semibold tracking-widest uppercase text-pecan/50">
                {title}
            </h2>
            {children}
        </section>
    );
}

export const Default: Story = {
    name: 'Typography Scale',
    render: () => (
        <div className="mx-auto max-w-3xl space-y-20 px-4 py-14 text-pecan">
            <Section title="Slab Serif — Headings">
                <div className="space-y-5">
                    <h1 className="font-slab text-6xl font-bold leading-none tracking-tight">
                        Deep in the Heart of Texas
                    </h1>
                    <h2 className="font-slab text-5xl font-bold leading-tight">
                        Lone Star State of Mind
                    </h2>
                    <h3 className="font-slab text-4xl font-semibold leading-snug">
                        From the Panhandle to the Gulf
                    </h3>
                    <h4 className="font-slab text-3xl font-semibold">
                        Hill Country at Sundown
                    </h4>
                    <h5 className="font-slab text-2xl font-medium">
                        Bluebonnets Along the Highway
                    </h5>
                    <h6 className="font-slab text-xl font-medium">
                        Where the Stars at Night Are Big and Bright
                    </h6>
                </div>
            </Section>

            <Section title="Sans-Serif — Body">
                <p className="font-sans text-xl leading-relaxed text-pecan/80">
                    Texas is a land of contrasts — from the red rock canyons of
                    Palo Duro to the barrier islands of the Gulf Coast, the
                    Piney Woods of the East to the Chihuahuan Desert of the far
                    West.
                </p>
                <p className="font-sans text-base leading-relaxed text-pecan/70">
                    The state flower is the bluebonnet, the state tree is the
                    pecan, and the state bird is the mockingbird. Every spring,
                    wildflowers carpet the roadsides from Highway 290 across the
                    Hill Country, drawing visitors from across the country in a
                    tradition locals call "going to see the bluebonnets."
                </p>
            </Section>

            <Section title="Inline Styles">
                <p className="font-sans text-base leading-relaxed text-pecan/70">
                    Texas barbecue relies on{' '}
                    <strong className="font-semibold text-pecan">
                        low heat and long time
                    </strong>
                    , letting the smoke do its work.{' '}
                    <em className="italic">Brisket</em> is king — rubbed with
                    nothing more than salt and pepper, then rested in butcher
                    paper. Use{' '}
                    <code className="rounded bg-mesa/60 px-1.5 py-0.5 font-mono text-sm text-bluebonnet dark:bg-mesa/20">
                        oak
                    </code>{' '}
                    or{' '}
                    <code className="rounded bg-mesa/60 px-1.5 py-0.5 font-mono text-sm text-bluebonnet dark:bg-mesa/20">
                        post oak
                    </code>{' '}
                    for the best flavor. Some purists say{' '}
                    <s className="text-pecan/40">mesquite is acceptable</s> —
                    they are wrong. Visit the{' '}
                    <a
                        href="#"
                        className="text-sky underline underline-offset-2 transition-opacity hover:opacity-75"
                    >
                        Texas Monthly BBQ Finder
                    </a>{' '}
                    to plan your pilgrimage.
                </p>
            </Section>

            <Section title="Blockquote">
                <blockquote className="rounded-r-lg border-l-4 border-longhorn bg-longhorn/8 px-6 py-5 dark:bg-longhorn/12">
                    <p className="font-slab text-2xl italic leading-snug text-pecan/85 dark:text-pecan/90">
                        Texas is a state of mind. Texas is an obsession. Above
                        all, Texas is a nation in every sense of the word.
                    </p>
                    <cite className="mt-4 block font-sans text-sm not-italic text-pecan/50">
                        — John Steinbeck,{' '}
                        <em>Travels with Charley: In Search of America</em>
                    </cite>
                </blockquote>
            </Section>

            <Section title="Lists">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p className="mb-3 font-slab text-sm font-semibold uppercase tracking-wider text-pecan/50">
                            Unordered
                        </p>
                        <ul className="font-sans list-disc space-y-1.5 pl-5 text-base leading-relaxed text-pecan/70">
                            <li>Brisket (the only correct answer)</li>
                            <li>Pork ribs, beef ribs</li>
                            <li>Jalapeño cheddar sausage</li>
                            <li>Potato salad &amp; coleslaw</li>
                            <li>White bread and pickles</li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-3 font-slab text-sm font-semibold uppercase tracking-wider text-pecan/50">
                            Ordered
                        </p>
                        <ol className="font-sans list-decimal space-y-1.5 pl-5 text-base leading-relaxed text-pecan/70">
                            <li>Season brisket with salt &amp; pepper</li>
                            <li>Smoke at 225 °F over post oak</li>
                            <li>Wrap in butcher paper at the stall</li>
                            <li>Pull at 203 °F internal temp</li>
                            <li>Rest for at least one hour</li>
                        </ol>
                    </div>
                </div>
            </Section>
        </div>
    )
};
