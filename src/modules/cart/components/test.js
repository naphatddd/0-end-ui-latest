import {
    Controller,
    FormProvider,
    useForm,
    useFormContext
  } from "react-hook-form";
  import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    TextField
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  
  import "./styles.css";
  
  const useStyles = makeStyles((theme) => ({
    cardActions: {
      padding: theme.spacing(2)
    }
  }));
  
  const defaultValues = {
    position: "",
    department: ""
  };
  
  const FormInputText = (props) => {
    const { control, setValue } = useFormContext();
    const { label, name } = props;
  
    return (
      <Controller
        control={control}
        name={name}
        render={({ onChange, ref, ...props }) => (
          <TextField
            fullWidth
            label={label}
            margin="dense"
            onChange={(e) => setValue(name, e.target.value.toUpperCase())}
            variant="outlined"
            {...props}
          />
        )}
      />
    );
  };
  
  const App = () => {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;
    const classes = useStyles();
  
    const onFormSubmit = (data) => console.log(data);
  
    return (
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Card>
            <CardHeader title="Form" />
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <FormInputText name="position" label="Position" />
                </Grid>
                <Grid item xs={12}>
                  <FormInputText name="department" label="Department" />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </CardActions>
          </Card>
        </form>
      </FormProvider>
    );
  };
  
  export default App;
  