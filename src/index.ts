// Components
export { Button, buttonVariants } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Input, inputVariants } from './components/Input';
export type { InputProps } from './components/Input';

export { Textarea, textareaVariants } from './components/Textarea';
export type { TextareaProps } from './components/Textarea';

export {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from './components/Card';

export { Badge, badgeVariants } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Alert, AlertTitle, AlertDescription, alertVariants } from './components/Alert';
export type { AlertProps } from './components/Alert';

export { Avatar, avatarVariants } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';

export {
    ComboboxRoot,
    ComboboxPortal,
    ComboboxGroup,
    ComboboxCollection,
    ComboboxValue,
    ComboboxChips,
    ComboboxChip,
    ComboboxChipRemove,
    ComboboxInput,
    ComboboxTrigger,
    ComboboxClear,
    ComboboxPositioner,
    ComboboxPopup,
    ComboboxList,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxItemText,
    ComboboxEmpty,
    ComboboxSeparator,
    ComboboxGroupLabel,
    ComboboxStatus,
    ComboboxIcon,
    ComboboxLabel,
    ComboboxInputGroup,
    ComboboxBackdrop,
    ComboboxArrow,
    ComboboxRow,
    useComboboxFilter,
    useComboboxFilteredItems,
    createComboboxItems
} from './components/Combobox';

export {
    CheckboxRoot,
    CheckboxIndicator,
    CheckboxGroup
} from './components/Checkbox';

export { RadioGroup, RadioRoot, RadioIndicator } from './components/Radio';

export { SwitchRoot, SwitchThumb } from './components/Switch';

export {
    SelectRoot,
    SelectPortal,
    SelectBackdrop,
    SelectGroup,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
    SelectIcon,
    SelectPositioner,
    SelectPopup,
    SelectList,
    SelectItem,
    SelectItemText,
    SelectItemIndicator,
    SelectGroupLabel,
    SelectScrollUpArrow,
    SelectScrollDownArrow,
    SelectLabel,
    SelectArrow
} from './components/Select';

export {
    FieldRoot,
    FieldLabel,
    FieldControl,
    FieldDescription,
    FieldError,
    FieldItem,
    FieldValidity
} from './components/Field';

export { FieldsetRoot, FieldsetLegend } from './components/Fieldset';

export {
    DialogRoot,
    DialogPortal,
    DialogBackdrop,
    DialogViewport,
    DialogPopup,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogTrigger,
    createDialogHandle
} from './components/Dialog';

export {
    AlertDialogRoot,
    AlertDialogPortal,
    AlertDialogBackdrop,
    AlertDialogViewport,
    AlertDialogPopup,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogClose,
    AlertDialogTrigger,
    createAlertDialogHandle
} from './components/AlertDialog';

export {
    DrawerRoot,
    DrawerPortal,
    DrawerTrigger,
    DrawerBackdrop,
    DrawerViewport,
    DrawerPopup,
    DrawerContent,
    DrawerHandle,
    DrawerTitle,
    DrawerDescription,
    DrawerClose,
    DrawerProvider,
    DrawerVirtualKeyboardProvider,
    DrawerIndent,
    DrawerIndentBackground,
    DrawerSwipeArea,
    createDrawerHandle
} from './components/Drawer';

export {
    TooltipProvider,
    TooltipRoot,
    TooltipPortal,
    TooltipTrigger,
    TooltipPositioner,
    TooltipPopup,
    TooltipArrow,
    TooltipViewport,
    createTooltipHandle
} from './components/Tooltip';

export {
    PopoverRoot,
    PopoverPortal,
    PopoverTrigger,
    PopoverBackdrop,
    PopoverPositioner,
    PopoverPopup,
    PopoverTitle,
    PopoverDescription,
    PopoverClose,
    PopoverArrow,
    PopoverViewport,
    createPopoverHandle
} from './components/Popover';

export {
    PreviewCardRoot,
    PreviewCardPortal,
    PreviewCardTrigger,
    PreviewCardBackdrop,
    PreviewCardPositioner,
    PreviewCardPopup,
    PreviewCardArrow,
    PreviewCardViewport,
    createPreviewCardHandle
} from './components/PreviewCard';

export {
    TabsRoot,
    TabsList,
    TabsTab,
    TabsIndicator,
    TabsPanel
} from './components/Tabs';

export {
    AccordionRoot,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionPanel
} from './components/Accordion';

export {
    CollapsibleRoot,
    CollapsibleTrigger,
    CollapsiblePanel
} from './components/Collapsible';

export { SeparatorRoot } from './components/Separator';

// ── v0.7.0 — Menus & Toolbar ─────────────────────────────────────────────────

export {
    MenuRoot,
    MenuTrigger,
    MenuPortal,
    MenuBackdrop,
    MenuPositioner,
    MenuPopup,
    MenuArrow,
    MenuItem,
    MenuLinkItem,
    MenuSeparator,
    MenuGroup,
    MenuGroupLabel,
    MenuRadioGroup,
    MenuRadioItem,
    MenuRadioItemIndicator,
    MenuCheckboxItem,
    MenuCheckboxItemIndicator,
    MenuSubmenuRoot,
    MenuSubmenuTrigger,
    MenuViewport,
    createMenuHandle
} from './components/Menu';

export {
    ContextMenuRoot,
    ContextMenuTrigger,
    ContextMenuPortal,
    ContextMenuBackdrop,
    ContextMenuPositioner,
    ContextMenuPopup,
    ContextMenuArrow,
    ContextMenuItem,
    ContextMenuLinkItem,
    ContextMenuSeparator,
    ContextMenuGroup,
    ContextMenuGroupLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuRadioItemIndicator,
    ContextMenuCheckboxItem,
    ContextMenuCheckboxItemIndicator,
    ContextMenuSubmenuRoot,
    ContextMenuSubmenuTrigger
} from './components/ContextMenu';

export { MenubarRoot } from './components/Menubar';

export {
    ToolbarRoot,
    ToolbarButton,
    ToolbarLink,
    ToolbarSeparator,
    ToolbarGroup,
    ToolbarInput
} from './components/Toolbar';

// ── Kindling ─────────────────────────────────────────────────────────────────

export { SearchField } from './components/SearchField';
export type { SearchFieldProps } from './components/SearchField';

export { AvatarLabel } from './components/AvatarLabel';
export type { AvatarLabelProps } from './components/AvatarLabel';

// ── Bonfire ──────────────────────────────────────────────────────────────────

export { ProfileCard } from './components/ProfileCard';
export type { ProfileCardProps } from './components/ProfileCard';

export { PageHeader } from './components/PageHeader';
export type { PageHeaderProps } from './components/PageHeader';

export { ConfirmDialog } from './components/ConfirmDialog';
export type { ConfirmDialogProps } from './components/ConfirmDialog';

// ── v0.8.0 — New primitives ───────────────────────────────────────────────────

export {
    SliderRoot,
    SliderControl,
    SliderTrack,
    SliderIndicator,
    SliderThumb,
    SliderValue,
    SliderLabel
} from './components/Slider';

export {
    ProgressRoot,
    ProgressLabel,
    ProgressTrack,
    ProgressIndicator,
    ProgressValue
} from './components/Progress';

export {
    MeterRoot,
    MeterLabel,
    MeterTrack,
    MeterIndicator,
    MeterValue
} from './components/Meter';

export { ToggleRoot } from './components/Toggle';

export { ToggleGroupRoot } from './components/ToggleGroup';

export {
    NumberFieldRoot,
    NumberFieldGroup,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput,
    NumberFieldScrubArea,
    NumberFieldScrubAreaCursor
} from './components/NumberField';

export {
    OtpFieldRoot,
    OtpFieldInput,
    OtpFieldSeparator
} from './components/OtpField';

export {
    ScrollAreaRoot,
    ScrollAreaViewport,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    ScrollAreaCorner
} from './components/ScrollArea';

export { FormRoot } from './components/Form';

export {
    ToastProvider,
    ToastPortal,
    ToastViewport,
    ToastRoot,
    ToastContent,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
    ToastPositioner,
    ToastArrow,
    Toaster,
    useToastManager,
    createToastManager
} from './components/Toast';

export {
    NavigationMenuPortal,
    NavigationMenuRoot,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuIcon,
    NavigationMenuPositioner,
    NavigationMenuViewport,
    NavigationMenuPopup,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuArrow,
    NavigationMenuBackdrop
} from './components/NavigationMenu';

export {
    AutocompleteRoot,
    AutocompleteValue,
    AutocompletePortal,
    AutocompleteGroup,
    AutocompleteCollection,
    AutocompleteInput,
    AutocompleteTrigger,
    AutocompleteIcon,
    AutocompleteClear,
    AutocompletePositioner,
    AutocompletePopup,
    AutocompleteList,
    AutocompleteItem,
    AutocompleteEmpty,
    AutocompleteGroupLabel,
    AutocompleteInputGroup,
    AutocompleteBackdrop,
    AutocompleteArrow,
    AutocompleteRow,
    AutocompleteSeparator,
    AutocompleteStatus,
    useAutocompleteFilter,
    useAutocompleteFilteredItems
} from './components/Autocomplete';

// ── Utilities ─────────────────────────────────────────────────────────────────

// Utilities — exporting cn is optional, but useful for consumers
// who want consistent class merging with your library
export { cn } from './utils/cn';

// ── CVA utilities — for consumers building custom components ─────────────────
export { cva, type VariantProps } from 'cva';
