export default function SubmitBtn ({ onPress }) {
	return (
  <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  );
}