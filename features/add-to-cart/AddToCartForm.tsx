import Box from '@mui/material/Box'
import ItemAddedAlert from 'features/add-to-cart/ItemAddedAlert'
import { addItem } from 'features/user/userSlice'
import { Form, Formik, FormikHelpers } from 'formik'
import { Product } from 'features/shop-item/shopItem.interface'
import React, { useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { getColors, getSizes } from 'utils/shopItems.utils'
import AddToCartButton from './AddToCartButton'
import { FormikSelectionInput } from 'components/Forms/Fields/FormikSelectionInput'

export type AddItemFormProps = {
  item: Product
  onAddItem?: () => void
}

type AddToCartFormData = {
  size: string
  color: string
}

export default function AddToCartForm({
  item,
  onAddItem = () => {},
}: AddItemFormProps) {
  const sizes = getSizes(item)
  const colors = getColors(item)
  const [showAlert, setShowAlert] = useState(false)

  const initialValues = {
    size: sizes[0],
    color: colors[0],
  }

  const dispatch = useAppDispatch()

  const onSubmit = (
    { size, color }: AddToCartFormData,
    helpers: FormikHelpers<AddToCartFormData>,
  ) => {
    dispatch(
      addItem({
        ...item,
        color,
        size,
        quantity: 1,
      }),
    )
    onAddItem()
    setShowAlert(true)
    helpers.setSubmitting(false)
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Box
          component={Form}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <FormikSelectionInput name="size" selectionValues={sizes} />
          <FormikSelectionInput name="color" selectionValues={colors} />
          <AddToCartButton />
        </Box>
      </Formik>

      <ItemAddedAlert show={showAlert} />
    </>
  )
}
