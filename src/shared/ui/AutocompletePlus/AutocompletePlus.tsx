import { Autocomplete, AutocompleteProps, Button, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import AddItemModal from '../AddItemModal';

interface AutocompletePlusProps<
  Value extends { id: string },
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
> extends Omit<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
  canCreate: boolean;
  createLabel?: string;
}

const AutocompletePlus = <
  Value extends { id: string },
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean
>(
  props: AutocompletePlusProps<Value, Multiple, DisableClearable, FreeSolo>
) => {
  const { options, getOptionLabel, canCreate, createLabel } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [created, setCreated] = useState([]);
  return (
    <>
      <Autocomplete
        {...props}
        renderInput={(params) => <TextField {...params} />}
        options={[...options, ...created].concat(canCreate ? [{ id: 'plus' } as Value] : [])}
        renderOption={(props, option, { selected }) => {
          return option.id === 'plus' ? (
            <Button fullWidth onClick={() => setModalOpen(true)}>
              + Создать {createLabel}
            </Button>
          ) : (
            <li {...props} aria-selected={selected}>
              {getOptionLabel ? getOptionLabel?.(option) : option.id}
            </li>
          );
        }}
      />
      <AddItemModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        values={Object.keys({ id: 's' })}
        title="ssss"
      />
    </>
  );
};

export default AutocompletePlus;
